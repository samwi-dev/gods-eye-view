/** Render Radio state without making playback or Context decisions. */
export function renderRadioState(state) {
  if (this.destroyed || !state || !this._radioPanel) return;
  const lifecycle = this.actions.getLifecycle() || null;
  const lifecycleState =
    lifecycle?.lifecycleState || (state.enabled ? 'enabled' : 'disabled');
  state = {
    ...state,
    enabled: lifecycle ? lifecycle.enabled : state.enabled,
    lifecycleState,
    lifecycleUncertain: lifecycle?.uncertain || false,
  };
  this._radioState = state;
  const enabled = Boolean(state.enabled);
  const transitioning =
    lifecycleState === 'enabling' || lifecycleState === 'disabling';
  const lifecycleLabelZh =
    lifecycleState === 'enabling'
      ? '啟用中'
      : lifecycleState === 'disabling'
        ? '停用中'
        : lifecycleState.toUpperCase();
  const uncertain = Boolean(state.lifecycleUncertain);
  const interactive = enabled && !transitioning && !uncertain;
  const selected = state.selected || null;
  const hasStations = state.filteredCount > 0;
  const activePlayback = ['playing', 'buffering'].includes(state.audioState);
  document
    .getElementById('title-bar')
    ?.classList.toggle('radio-broadcasting', state.audioState === 'playing');
  this._radioPanel.classList.toggle('radio-enabled', enabled);
  this._radioPanel.classList.toggle('lifecycle-uncertain', uncertain);
  this._contextRadioDock?.classList.toggle('active', enabled);
  if (this._contextRadioToggleBtn) {
    this._contextRadioToggleBtn.classList.toggle('active', enabled);
  }
  this._syncContextRadioLauncherState();
  this._radioLayerState?.classList.toggle('active', enabled);
  if (this._radioLayerState) {
    this._radioLayerState.textContent = transitioning
      ? lifecycleLabelZh
      : uncertain
        ? '狀態不確定'
        : state.loading
          ? '同步中'
          : enabled
            ? `${state.filteredCount}/${state.stationCount}`
            : '關閉';
  }
  if (this._radioEnableBtn) {
    this._radioEnableBtn.classList.toggle('active', enabled);
    this._radioEnableBtn.setAttribute('aria-pressed', String(enabled));
    this._radioEnableBtn.textContent = transitioning
      ? lifecycleLabelZh
      : uncertain
        ? '重新同步'
        : enabled
          ? '停用'
          : '啟用';
    this._radioEnableBtn.setAttribute(
      'aria-label',
      uncertain
        ? '重新同步電台 — 狀態不確定'
        : `${enabled ? '停用' : '啟用'}電台`,
    );
    this._radioEnableBtn.disabled = false;
    this._radioEnableBtn.setAttribute('aria-disabled', String(transitioning));
    this._radioEnableBtn.setAttribute('aria-busy', String(transitioning));
  }
  if (this._contextRadioMiniEnableBtn) {
    this._contextRadioMiniEnableBtn.classList.toggle('active', enabled);
    this._contextRadioMiniEnableBtn.setAttribute(
      'aria-pressed',
      String(enabled),
    );
    this._contextRadioMiniEnableBtn.textContent = transitioning
      ? lifecycleLabelZh
      : uncertain
        ? '重新同步'
        : enabled
          ? '停用'
          : '啟用';
    this._contextRadioMiniEnableBtn.setAttribute(
      'aria-label',
      uncertain
        ? '重新同步電台 — 狀態不確定'
        : `${enabled ? '停用' : '啟用'}電台`,
    );
    this._contextRadioMiniEnableBtn.disabled = false;
    this._contextRadioMiniEnableBtn.setAttribute(
      'aria-disabled',
      String(transitioning),
    );
    this._contextRadioMiniEnableBtn.setAttribute(
      'aria-busy',
      String(transitioning),
    );
  }
  if (this._cockpitRadioEnableBtn) {
    this._cockpitRadioEnableBtn.classList.toggle('active', enabled);
    this._cockpitRadioEnableBtn.setAttribute('aria-pressed', String(enabled));
    this._cockpitRadioEnableBtn.textContent = transitioning
      ? lifecycleLabelZh
      : uncertain
        ? '重新同步'
        : enabled
          ? '停用'
          : '啟用';
    this._cockpitRadioEnableBtn.setAttribute(
      'aria-label',
      uncertain
        ? '重新同步電台 — 狀態不確定'
        : `${enabled ? '停用' : '啟用'}電台`,
    );
    this._cockpitRadioEnableBtn.disabled = false;
    this._cockpitRadioEnableBtn.setAttribute(
      'aria-disabled',
      String(transitioning),
    );
    this._cockpitRadioEnableBtn.setAttribute(
      'aria-busy',
      String(transitioning),
    );
  }

  if (this._radioFilter) {
    const prior = state.filter || 'all';
    const categorySignature = state.categories
      .map((category) => `${category.id}:${category.count}:${category.color}`)
      .join('|');
    if (categorySignature !== this._radioCategorySignature) {
      this._radioFilter.replaceChildren(
        ...state.categories.map((category) => {
          const option = document.createElement('option');
          option.value = category.id;
          option.textContent = `● ${category.label} (${category.count})`;
          option.dataset.radioColor = category.color;
          option.style.color = category.color;
          option.setAttribute(
            'aria-label',
            `${category.label} (${category.count})`,
          );
          return option;
        }),
      );
      this._radioCategorySignature = categorySignature;
    }
    this._radioFilter.value = prior;
    const activeCategory = state.categories.find(
      (category) => category.id === prior,
    );
    this._radioFilter.style.color = activeCategory?.color || '';
    this._radioFilter.disabled = !interactive || !state.stationCount;
  }

  const tunerAvailable = interactive && state.filteredCount > 0;
  if (this._radioTuner) this._radioTuner.hidden = !tunerAvailable;
  if (this._radioTunerSlider) this._radioTunerSlider.disabled = !tunerAvailable;
  if (this._radioTunerBandLabel) {
    const activeCategory = state.categories.find(
      (category) => category.id === state.filter,
    );
    this._radioTunerBandLabel.textContent =
      state.filter === 'all'
        ? '電台目錄頻段'
        : `${String(activeCategory?.label || state.filter).toUpperCase()} 頻段`;
  }
  this._radioTuner?.classList.toggle('is-static', Boolean(state.tuningStatic));
  if (tunerAvailable) this._refreshRadioTunerBand?.();
  if (!tunerAvailable && this._radioTunerDragging) {
    this._radioTunerDragging = false;
    this._radioTunerDragSnapshot = null;
    this._radioTunerStations = [];
    this._radioTuner?.classList.remove('is-static', 'is-dragging');
  }
  if (!tunerAvailable) {
    this._radioTunerStations = [];
    this._radioTunerPool = [];
    this._radioTunerBandSignature = '';
    this._radioTunerSelectedId = null;
  }

  if (this._radioStationName)
    this._radioStationName.textContent =
      selected?.name || '尚未選擇電台';
  if (this._radioStationMeta) {
    const place = selected
      ? [selected.state, selected.countryCode].filter(Boolean).join(' · ')
      : '';
    const signal = selected
      ? [selected.codec, selected.bitrate ? `${selected.bitrate} kbps` : '']
          .filter(Boolean)
          .join(' · ')
      : '';
    this._radioStationMeta.textContent = selected
      ? [place, signal].filter(Boolean).join('  /  ') ||
        '僅有目錄中繼資料'
      : state.loading
        ? '正在載入電台目錄…'
        : '選擇地球上的標記，或按下一台。';
  }
  if (this._radioStationTags) {
    const tags = Array.isArray(selected?.tags) ? selected.tags.slice(0, 8) : [];
    this._radioStationTags.textContent = tags.length
      ? `標籤 · ${tags.join(' · ')}`
      : '';
  }
  if (this._radioStationHomepage) {
    const homepage = selected?.homepage || '';
    this._radioStationHomepage.hidden = !homepage;
    if (homepage) this._radioStationHomepage.href = homepage;
    else this._radioStationHomepage.removeAttribute('href');
  }

  if (this._radioPrevBtn)
    this._radioPrevBtn.disabled = !interactive || !hasStations;
  if (this._radioNextBtn)
    this._radioNextBtn.disabled = !interactive || !hasStations;
  if (this._contextRadioMiniPrevBtn)
    this._contextRadioMiniPrevBtn.disabled = !interactive || !hasStations;
  if (this._contextRadioMiniNextBtn)
    this._contextRadioMiniNextBtn.disabled = !interactive || !hasStations;
  if (this._cockpitRadioPrevBtn)
    this._cockpitRadioPrevBtn.disabled = !interactive || !hasStations;
  if (this._cockpitRadioNextBtn)
    this._cockpitRadioNextBtn.disabled = !interactive || !hasStations;
  if (this._radioPlayBtn) {
    const action = activePlayback
      ? '暫停'
      : state.audioState === 'paused'
        ? '繼續'
        : '播放';
    this._radioPlayBtn.disabled = !interactive || !hasStations;
    this._radioPlayBtn.classList.toggle('active', activePlayback);
    this._radioPlayBtn.textContent = action;
    this._radioPlayBtn.setAttribute(
      'aria-label',
      `${action}${selected ? '所選' : '最近的'}電台`,
    );
  }
  if (this._contextRadioMiniPlayBtn) {
    const action = activePlayback
      ? '暫停'
      : state.audioState === 'paused'
        ? '繼續'
        : '播放';
    this._contextRadioMiniPlayBtn.disabled = !interactive || !hasStations;
    this._contextRadioMiniPlayBtn.classList.toggle('active', activePlayback);
    this._contextRadioMiniPlayBtn.textContent = activePlayback ? 'Ⅱ' : '▶';
    this._contextRadioMiniPlayBtn.setAttribute(
      'aria-label',
      `${action}${selected ? '所選' : '最近的'}電台`,
    );
    this._contextRadioMiniPlayBtn.title = action;
  }
  if (this._cockpitRadioPlayBtn) {
    const action = activePlayback
      ? '暫停'
      : state.audioState === 'paused'
        ? '繼續'
        : '播放';
    this._cockpitRadioPlayBtn.disabled = !interactive || !hasStations;
    this._cockpitRadioPlayBtn.classList.toggle('active', activePlayback);
    this._cockpitRadioPlayBtn.textContent = activePlayback ? 'Ⅱ' : '▶';
    this._cockpitRadioPlayBtn.setAttribute(
      'aria-label',
      `${action}${selected ? '所選' : '最近的'}電台`,
    );
    this._cockpitRadioPlayBtn.title = action;
  }
  if (this._radioStopBtn)
    this._radioStopBtn.disabled =
      !interactive || state.audioState === 'stopped';
  if (this._radioVolume) this._radioVolume.disabled = !interactive;
  if (this._radioVolume && document.activeElement !== this._radioVolume) {
    this._radioVolume.value = String(Math.round(state.volume * 100));
    if (this._radioVolumeValue)
      this._radioVolumeValue.textContent = `${Math.round(state.volume * 100)}%`;
  }
  if (
    this._contextRadioMiniVolume &&
    document.activeElement !== this._contextRadioMiniVolume
  ) {
    this._contextRadioMiniVolume.value = String(Math.round(state.volume * 100));
  }
  if (this._contextRadioMiniVolume)
    this._contextRadioMiniVolume.disabled = !interactive;
  if (this._contextRadioMiniVolumeValue) {
    this._contextRadioMiniVolumeValue.textContent = `${Math.round(state.volume * 100)}%`;
  }
  if (
    this._cockpitRadioVolume &&
    document.activeElement !== this._cockpitRadioVolume
  ) {
    this._cockpitRadioVolume.value = String(Math.round(state.volume * 100));
  }
  if (this._cockpitRadioVolume)
    this._cockpitRadioVolume.disabled = !interactive;
  if (this._cockpitRadioVolumeValue) {
    this._cockpitRadioVolumeValue.textContent = `${Math.round(state.volume * 100)}%`;
  }
  if (this._contextRadioMiniStation) {
    this._contextRadioMiniStation.textContent = uncertain
      ? '電台狀態不確定'
      : selected?.name || (state.loading ? '正在同步目錄' : '電台就緒');
  }
  if (this._cockpitRadioStation) {
    this._cockpitRadioStation.textContent = uncertain
      ? '不確定'
      : selected?.name || (state.loading ? '同步中' : '就緒');
  }
  if (this._radioPlaybackState) {
    const catalogSuffix = state.degraded
      ? state.stale
        ? ' · 目錄已過期／品質下降'
        : ' · 目錄品質下降'
      : state.stale
        ? ' · 目錄已過期'
        : '';
    const outsideFilter =
      selected && state.selectedIndex < 0 ? ' · 不在目前篩選範圍內' : '';
    const messages = {
      stopped: enabled
        ? '就緒 — 需手動操作才會開始播放'
        : '電台已關閉',
      loading: '正在直接連線至廣播來源…',
      buffering: '正在緩衝廣播串流…',
      playing: `正在播放 ${selected?.name || '電台'}`,
      paused: `已暫停 ${selected?.name || '電台'}`,
      error: state.audioError || '廣播串流無法使用',
    };
    const voiceSuffix = state.voiceDucked
      ? ' · 語音互動中已靜音'
      : state.voiceRestoring
        ? ' · 語音結束後正在恢復音量'
        : '';
    const tuningSuffix = state.tuningAwaitingStationId
      ? state.audioState === 'error'
        ? ' · 雜訊表示廣播來源無音訊'
        : ' · 廣播開始前為調頻雜訊'
      : '';
    const unavailable = state.tuningUnavailableStationId
      ? '目錄重新整理後該電台已無法使用 — 請選擇其他頻道'
      : null;
    const lifecycleMessage = transitioning
      ? lifecycleState === 'enabling'
        ? '電台啟用中…'
        : '電台停用中…'
      : null;
    const uncertainMessage = uncertain
      ? '電台狀態不確定 — 請使用啟用或停用以重新同步'
      : null;
    this._radioPlaybackState.textContent = `${uncertainMessage || unavailable || lifecycleMessage || state.error || messages[state.audioState] || '就緒'}${tuningSuffix}${voiceSuffix}${catalogSuffix}${outsideFilter}`;
    this._radioPlaybackState.classList.toggle(
      'error',
      Boolean(
        uncertainMessage ||
        unavailable ||
        state.error ||
        state.audioState === 'error',
      ),
    );
  }
  if (
    !enabled &&
    !transitioning &&
    !this.actions.preservePanelStateDuringClear() &&
    !this._radioPanel.classList.contains('collapsed')
  ) {
    this.actions.setPanelCollapsed('radio-panel', true);
  }
  this.actions.scheduleLayout();
}

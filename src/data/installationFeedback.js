/** Explain mapped-site availability without claiming an unobserved overload. */
export function installationFeedback(stats = {}, now = Date.now()) {
  const reasons = {
    rate_limited: 'Overpass 已達速率限制',
    timeout: 'Overpass 逾時',
    query_failed: 'Overpass 無法完成查詢',
  };
  const reason =
    reasons[stats.failureReason] || 'Overpass 暫時無法使用';
  if (stats.loading)
    return stats.retrying ? '正在重試標記設施…' : '正在取得標記設施…';
  if (stats.retryAt > 0) {
    const seconds = Math.max(0, Math.ceil((stats.retryAt - now) / 1000));
    return `${reason} — ${seconds ? `將於 ${seconds} 秒後重試` : '等待重試'}`;
  }
  if (stats.status === 'unavailable') return reason;
  if (stats.status === 'zoom-in')
    return '放大以搜尋標記設施';
  if (stats.stale) return '顯示快取的標記設施';
  if (stats.status === 'idle') return '尚未載入標記設施';
  return '標記設施已載入';
}

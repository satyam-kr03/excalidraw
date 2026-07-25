// Offline mode: analytics/telemetry is completely disabled.
// trackEvent is a no-op to prevent any network requests.

export const trackEvent = (
  _category: string,
  _action: string,
  _label?: string,
  _value?: number,
) => {
  // no-op
};

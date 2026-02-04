# SMS Alert Templates — Las Flores Water Co.

Message templates for shareholder SMS notifications. Implementation via Twilio or similar service is future work. All messages must stay under 160 characters where possible (single SMS segment). Longer messages noted with segment count.

---

## Emergency Alerts

### Water Main Break
```
LAS FLORES ALERT: Water main break on [STREET]. Crews dispatched. Avoid area. Updates: lasfloreswaterco.com
```
_~105 chars (1 segment)_

### Boil Water Notice
```
LAS FLORES ALERT: Boil water notice in effect for [AREA]. Boil tap water before drinking until further notice. Info: lasfloreswaterco.com
```
_~140 chars (1 segment)_

### Boil Notice Lifted
```
LAS FLORES: Boil water notice LIFTED for [AREA]. Tap water is safe to drink. Thank you for your patience.
```
_~107 chars (1 segment)_

### Service Disruption
```
LAS FLORES: Planned water service interruption [DATE] [TIME] on [STREET]. Store water in advance. Questions: 626-797-1138
```
_~123 chars (1 segment)_

---

## Conservation Alerts

### Status Change — Critical
```
LAS FLORES: Conservation status changed to CRITICAL. Outdoor watering limited to 2 days/week. Details: lasfloreswaterco.com/water-status
```
_~138 chars (1 segment)_

### Status Change — Warning
```
LAS FLORES: Conservation status changed to WARNING. Please reduce outdoor water use. Details: lasfloreswaterco.com/water-status
```
_~127 chars (1 segment)_

### Status Change — Normal
```
LAS FLORES: Conservation status returned to NORMAL. Thank you for conserving. Current guidelines: lasfloreswaterco.com/water-status
```
_~132 chars (1 segment)_

---

## Meeting Reminders

### Shareholder Meeting (48 hrs before)
```
LAS FLORES: Annual Shareholder Meeting [DATE], [TIME] at [LOCATION]. All shareholders welcome. Agenda: [LINK]
```
_~110 chars (1 segment)_

### Board Meeting (48 hrs before)
```
LAS FLORES: Board meeting [DATE] at [TIME]. Open to shareholders and public. Location: [LOCATION]
```
_~99 chars (1 segment)_

### Special Meeting
```
LAS FLORES: Special shareholder meeting [DATE], [TIME] at [LOCATION]. Topic: [TOPIC]. Your attendance matters.
```
_~112 chars (1 segment)_

---

## Billing & Rates

### Rate Change
```
LAS FLORES: New water rates effective [DATE]. View rate schedule: lasfloreswaterco.com/rates-billing
```
_~101 chars (1 segment)_

### Payment Reminder
```
LAS FLORES: Your water bill is due [DATE]. Pay online: lasfloresviewmybill.net or call 626-797-1138
```
_~101 chars (1 segment)_

### Past Due Notice
```
LAS FLORES: Your account has an overdue balance. Late fees apply at $25+. Pay now: lasfloresviewmybill.net or call 626-797-1138
```
_~127 chars (1 segment)_

---

## Opt-in / Opt-out

### Welcome
```
LAS FLORES Water Co. SMS alerts activated. Reply STOP to unsubscribe. Msg & data rates may apply. Info: lasfloreswaterco.com
```
_~124 chars (1 segment)_

### Confirmation of Unsubscribe
```
LAS FLORES: You have been unsubscribed from SMS alerts. Reply START to re-subscribe. Questions: 626-797-1138
```
_~110 chars (1 segment)_

---

## Implementation Notes

- **Sender ID:** Use "LAS FLORES" or a dedicated short code
- **Frequency:** Emergency alerts sent immediately; meeting reminders 48 hours before; billing monthly
- **Opt-in required:** Shareholders must explicitly opt in to SMS alerts
- **Compliance:** Follow TCPA and CTIA guidelines for commercial messaging
- **Categories:** Allow subscribers to choose alert types (emergency only, all alerts, etc.)
- **Integration:** Twilio recommended for initial implementation; webhook triggers from site CMS or manual admin panel

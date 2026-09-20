import json
p = r"C:\Users\SHRUTI SINGH\.cursor\browser-logs\cdp-response-Runtime.evaluate-2026-09-15T14-38-29-888Z.json"
raw = open(p, encoding="utf-8").read()
data = json.loads(raw)
val = data
if isinstance(val, dict) and "result" in val:
    val = val["result"]
if isinstance(val, dict) and "value" in val:
    val = val["value"]
if isinstance(val, str):
    urls = json.loads(val)
else:
    urls = val
uniq = []
seen = set()
for u in urls:
    u = u.split("?")[0]
    if "jdmagicbox" not in u:
        continue
    if any(x in u for x in ["icon", "icontent", "jdsocial", "quickquotes" ]):
        continue
    if u in seen:
        continue
    seen.add(u)
    uniq.append(u)
print(len(uniq))
for u in uniq:
    print(u)

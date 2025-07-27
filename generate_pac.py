import requests
import random
import os

# پراکسی‌فایل‌ها از ریپو
PROXY_SOURCES = {
    "HTTPS": "https://raw.githubusercontent.com/vAHiD55555/Free-Proxies/main/proxy_files/https_proxies.txt",
    "SOCKS5": "https://raw.githubusercontent.com/vAHiD55555/Free-Proxies/main/proxy_files/socks5_proxies.txt"
}

# کشورهایی که فایل جدا می‌خواهند
TARGET_COUNTRIES = {
    "US": "us",
    "DE": "de",
    "NL": "nl",
    "FI": "fi"
}

PAC_OUTPUT_FOLDER = "pac_files"
os.makedirs(PAC_OUTPUT_FOLDER, exist_ok=True)

def get_geo(proxy, scheme):
    try:
        r = requests.get("http://ip-api.com/json", proxies={scheme.lower(): f"{scheme.lower()}://{proxy}"}, timeout=4)
        data = r.json()
        if data["status"] == "success":
            return data["countryCode"], data["query"]
    except:
        return None, None

def generate_pac(name, proxies):
    file_path = os.path.join(PAC_OUTPUT_FOLDER, f"{name}-proxy.pac")
    with open(file_path, "w") as f:
        f.write("function FindProxyForURL(url, host) {\n")
        f.write("    var proxyList = [\n")
        for proxy in proxies:
            f.write(f'        "SOCKS {proxy}",\n')
        f.write("    ];\n")
        f.write("    var i = Math.floor(Math.random() * proxyList.length);\n")
        f.write("    return proxyList[i];\n")
        f.write("}")
    print(f"[+] ساخته شد: {file_path}")

def main():
    valid_proxies = []
    proxies_by_country = {code: [] for code in TARGET_COUNTRIES.values()}

    for scheme, url in PROXY_SOURCES.items():
        raw = requests.get(url).text.strip().splitlines()
        for proxy in raw:
            country, ip = get_geo(proxy.strip(), scheme)
            if not country:
                continue
            valid_proxies.append(proxy.strip())
            for code, slug in TARGET_COUNTRIES.items():
                if country == code:
                    proxies_by_country[slug].append(proxy.strip())

    # ساخت فایل‌ها
    for slug, proxy_list in proxies_by_country.items():
        if proxy_list:
            generate_pac(slug, proxy_list)

    # بهترین‌ها: از پراکسی‌های سالم ترکیبی
    best = random.sample(valid_proxies, min(len(valid_proxies), 20))
    generate_pac("best", best)

if __name__ == "__main__":
    main()

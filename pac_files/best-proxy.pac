function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 149.104.4.88:10809",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 13.229.47.109:80",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 94.159.106.252:1080",
        "SOCKS 62.133.62.12:1082",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 166.249.154.135:3128",
        "SOCKS 213.35.110.67:10846",
        "SOCKS 43.250.54.139:60000",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 213.35.110.67:10864",
        "SOCKS 193.163.72.88:10808",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 85.234.83.80:3128",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 45.95.173.86:7700",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 113.195.224.222:9999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 149.202.75.85:36666",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 123.54.197.18:21905",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 123.54.197.20:23341",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 61.72.221.244:3128",
        "SOCKS 123.54.197.52:22281",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 118.99.108.4:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
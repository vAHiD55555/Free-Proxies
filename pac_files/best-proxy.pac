function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.189.158.239:1080",
        "SOCKS 103.189.218.85:6969",
        "SOCKS 103.143.89.9:1080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 163.47.37.190:1080",
        "SOCKS 115.127.112.178:1080",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 62.60.131.189:7788",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 115.127.119.252:1080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 187.199.23.19:80",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 43.167.186.217:6006",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
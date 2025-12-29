function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.181:4224",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 36.255.98.177:46018",
        "SOCKS 94.254.244.251:8192",
        "SOCKS 115.127.178.34:2589",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 87.117.11.57:1080",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 85.113.43.181:1080",
        "SOCKS 51.38.155.24:46069",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
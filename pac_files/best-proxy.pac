function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 206.123.156.185:4470",
        "SOCKS 205.185.113.92:1080",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 206.123.156.223:8097",
        "SOCKS 14.56.118.164:3128",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 117.1.48.242:20058",
        "SOCKS 31.59.129.75:8080",
        "SOCKS 154.64.235.206:58367",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 113.168.118.213:1080",
        "SOCKS 142.171.85.32:1080",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 193.233.254.82:1080",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 139.59.7.217:36590",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 116.204.231.88:1080",
        "SOCKS 5.255.103.55:1080",
        "SOCKS 43.208.245.90:3129",
        "SOCKS 103.111.136.82:8199",
        "SOCKS 94.232.44.246:10808",
        "SOCKS 131.153.163.218:8254",
        "SOCKS 178.128.53.12:1080",
        "SOCKS 78.63.115.20:8899",
        "SOCKS 101.36.104.239:10808",
        "SOCKS 193.30.123.61:9050",
        "SOCKS 146.103.110.73:1080",
        "SOCKS 34.43.46.91:80",
        "SOCKS 107.161.168.159:3333",
        "SOCKS 47.237.92.86:45",
        "SOCKS 149.129.226.9:69",
        "SOCKS 82.22.174.113:1080",
        "SOCKS 43.155.232.123:1080",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 159.69.21.0:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
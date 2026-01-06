function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 83.171.252.150:8080",
        "SOCKS 178.130.47.129:1082",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 15.168.235.57:12185",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 164.77.40.101:8080",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 4.213.180.179:3128",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 103.28.121.58:80",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 213.97.158.42:3128",
        "SOCKS 36.95.142.35:8080",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 185.123.143.247:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
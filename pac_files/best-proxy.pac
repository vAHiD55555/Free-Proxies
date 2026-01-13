function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 88.216.68.12:9075",
        "SOCKS 45.189.252.240:999",
        "SOCKS 62.60.131.183:8168",
        "SOCKS 196.204.83.235:1981",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 103.204.211.48:32255",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 72.207.113.97:4145",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 46.8.69.113:1080",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 103.102.12.129:1452",
        "SOCKS 78.12.223.246:2724",
        "SOCKS 47.82.104.217:1100",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 54.74.104.194:8299",
        "SOCKS 124.248.177.91:1080",
        "SOCKS 103.189.218.83:6969",
        "SOCKS 152.228.212.223:29272",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
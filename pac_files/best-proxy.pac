function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 119.81.71.27:80",
        "SOCKS 62.60.131.205:19541",
        "SOCKS 89.148.196.156:1080",
        "SOCKS 62.60.131.253:8426",
        "SOCKS 36.255.98.151:20986",
        "SOCKS 36.255.98.160:12126",
        "SOCKS 36.255.98.167:11722",
        "SOCKS 62.60.131.204:19543",
        "SOCKS 46.8.69.113:1080",
        "SOCKS 124.248.177.43:1080",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 36.255.98.177:5671",
        "SOCKS 36.255.98.161:4847",
        "SOCKS 36.255.98.160:4226",
        "SOCKS 62.60.131.253:5124",
        "SOCKS 36.255.98.180:10349",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 36.255.98.177:4334",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 173.212.237.43:43648",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
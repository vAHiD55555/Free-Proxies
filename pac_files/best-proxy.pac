function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 140.238.184.182:3128",
        "SOCKS 38.190.100.236:999",
        "SOCKS 27.71.228.32:3128",
        "SOCKS 221.202.27.194:10811",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 135.181.203.208:80",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 173.209.63.68:8037",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 116.103.143.11:1009",
        "SOCKS 45.134.15.205:1080",
        "SOCKS 95.47.239.65:3128",
        "SOCKS 65.108.203.35:28080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
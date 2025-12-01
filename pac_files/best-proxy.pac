function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 114.236.93.203:15800",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 171.234.50.255:5516",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 171.238.88.27:1054",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 72.10.160.174:10301",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 171.238.103.65:1030",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 171.238.88.218:1092",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 171.234.48.230:5516",
        "SOCKS 46.39.105.157:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
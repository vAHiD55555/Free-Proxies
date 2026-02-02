function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.168:4260",
        "SOCKS 62.60.131.182:6667",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 36.255.98.160:4278",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 62.60.131.185:6060",
        "SOCKS 41.65.160.172:1976",
        "SOCKS 62.60.131.197:4550",
        "SOCKS 119.81.189.194:80",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 36.255.98.179:4017",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 36.255.98.168:4224",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 152.53.171.242:10307",
        "SOCKS 2.144.6.212:12111",
        "SOCKS 36.255.98.152:8470",
        "SOCKS 169.57.157.148:80",
        "SOCKS 36.255.98.167:5306",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
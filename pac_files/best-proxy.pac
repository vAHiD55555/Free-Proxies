function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 137.184.228.194:40886",
        "SOCKS 36.255.98.160:4054",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 36.255.98.153:17485",
        "SOCKS 62.60.131.182:19035",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 62.60.131.194:5409",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 36.255.98.184:29033",
        "SOCKS 36.255.98.161:17472",
        "SOCKS 36.255.98.175:6682",
        "SOCKS 62.60.131.197:4500",
        "SOCKS 36.255.98.167:4097",
        "SOCKS 62.60.131.193:4437",
        "SOCKS 46.0.205.4:1080",
        "SOCKS 62.60.131.253:17527",
        "SOCKS 62.60.131.182:6060",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
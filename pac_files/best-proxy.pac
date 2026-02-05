function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.166.252.135:8080",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 185.181.208.82:3128",
        "SOCKS 18.141.177.23:80",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 68.167.181.9:3128",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 158.180.37.163:8080",
        "SOCKS 119.81.71.27:80",
        "SOCKS 154.197.69.137:1081",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 90.8.144.108:3317",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 103.178.83.251:1080",
        "SOCKS 146.235.19.84:10864",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
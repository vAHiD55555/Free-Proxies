function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.242.175.241:8899",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 58.187.104.67:2120",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 171.238.88.27:1054",
        "SOCKS 89.110.80.195:10149",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 82.115.24.134:9090",
        "SOCKS 13.246.35.124:240",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 185.149.240.155:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
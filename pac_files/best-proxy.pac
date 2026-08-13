function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 129.150.47.213:9050",
        "SOCKS 66.181.39.197:1080",
        "SOCKS 87.192.233.75:3128",
        "SOCKS 103.197.241.209:1080",
        "SOCKS 31.76.15.189:3128",
        "SOCKS 171.253.95.241:1083",
        "SOCKS 188.247.54.234:1080",
        "SOCKS 66.59.197.62:3128",
        "SOCKS 107.173.230.93:40000",
        "SOCKS 132.243.120.54:10809",
        "SOCKS 161.35.90.93:1081",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 45.10.42.68:1080",
        "SOCKS 194.163.174.78:1082",
        "SOCKS 199.247.29.193:50000",
        "SOCKS 47.81.56.193:8888",
        "SOCKS 185.205.210.154:1084",
        "SOCKS 8.219.195.99:8080",
        "SOCKS 103.6.235.13:5555",
        "SOCKS 212.58.132.5:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
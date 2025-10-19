function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.93.89.157:14807",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 45.70.236.194:999",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 65.109.52.109:1080",
        "SOCKS 185.244.36.237:37851",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 172.236.140.167:3128",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 143.92.61.148:8082",
        "SOCKS 103.66.47.9:8080",
        "SOCKS 146.70.164.210:1080",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 190.119.160.29:56160",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 185.93.89.182:4646",
        "SOCKS 103.136.107.70:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 91.121.48.221:38711",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
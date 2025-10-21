function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 163.61.112.248:8080",
        "SOCKS 137.184.152.66:20090",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 170.39.194.14:735",
        "SOCKS 170.39.194.14:754",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 198.177.125.109:3949",
        "SOCKS 93.184.4.37:1080",
        "SOCKS 40.192.27.104:41",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 137.184.152.66:20895",
        "SOCKS 8.219.178.111:9090",
        "SOCKS 119.40.84.86:8010",
        "SOCKS 117.74.65.207:443",
        "SOCKS 185.93.89.146:6565",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 190.119.160.29:56160",
        "SOCKS 170.39.194.14:673",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 185.93.89.146:4007",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
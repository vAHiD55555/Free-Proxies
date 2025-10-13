function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.246.90.213:1080",
        "SOCKS 160.25.8.141:11011",
        "SOCKS 185.213.169.147:1080",
        "SOCKS 168.138.15.93:1080",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 62.210.37.74:8012",
        "SOCKS 132.145.89.122:1080",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 80.80.163.194:46276",
        "SOCKS 78.12.249.123:8026",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 193.227.129.215:52203",
        "SOCKS 66.70.235.23:5454",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
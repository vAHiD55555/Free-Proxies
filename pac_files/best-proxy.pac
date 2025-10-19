function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 54.90.159.174:9501",
        "SOCKS 8.222.190.62:1011",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 72.10.160.92:12137",
        "SOCKS 185.93.89.163:4031",
        "SOCKS 31.128.41.253:28080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 185.93.89.157:14807",
        "SOCKS 35.183.64.191:30309",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 185.93.89.183:5566",
        "SOCKS 38.54.1.17:8888",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 185.93.89.145:14924",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 64.181.240.152:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
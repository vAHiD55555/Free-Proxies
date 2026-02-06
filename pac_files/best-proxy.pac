function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.206.205.75:4216",
        "SOCKS 210.223.44.230:3128",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 35.164.47.97:1080",
        "SOCKS 169.57.157.148:80",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 213.35.110.67:10919",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 8.215.85.201:7777",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 188.166.34.137:9000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
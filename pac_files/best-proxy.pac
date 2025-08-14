function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 94.182.146.250:8080",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 162.212.153.46:8888",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 194.59.204.87:9080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 65.108.251.40:57575",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 123.21.6.109:1010",
        "SOCKS 85.111.94.98:20519",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
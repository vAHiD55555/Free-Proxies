function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.242.175.241:8899",
        "SOCKS 114.67.227.38:8080",
        "SOCKS 193.233.254.9:1080",
        "SOCKS 110.74.195.34:25",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 41.65.160.172:1976",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 54.74.104.194:8299",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 103.56.206.77:8099",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
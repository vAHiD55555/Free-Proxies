function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.121.48.221:38711",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 150.227.4.147:1080",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 38.54.9.151:999",
        "SOCKS 45.115.112.142:11011",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 84.252.70.254:1080",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 51.38.155.24:46069",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
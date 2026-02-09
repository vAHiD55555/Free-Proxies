function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.113.73.102:3128",
        "SOCKS 146.235.19.84:10850",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 213.35.110.67:10811",
        "SOCKS 146.235.19.84:10819",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 85.132.37.9:1313",
        "SOCKS 213.35.110.67:10810",
        "SOCKS 205.185.120.241:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
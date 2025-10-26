function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.212.215.22:7070",
        "SOCKS 185.93.89.147:4140",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 185.93.89.144:6846",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 115.127.19.163:9090",
        "SOCKS 185.93.89.163:4576",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 103.191.196.33:8080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 185.93.89.179:9142",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 91.201.115.84:8080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 181.214.39.51:5719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
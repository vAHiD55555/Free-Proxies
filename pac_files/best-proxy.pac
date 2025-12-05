function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 221.134.152.75:7302",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 121.167.212.146:8089",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 72.10.164.178:2493",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
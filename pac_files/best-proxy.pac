function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.83.142:1088",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 116.107.98.148:10001",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 128.199.37.92:1080",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 120.92.212.16:8890",
        "SOCKS 124.248.190.47:1080",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 51.158.105.107:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
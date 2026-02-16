function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.128.167.129:1080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 45.140.147.155:1081",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 140.246.125.194:9099",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 91.242.229.96:1080",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 5.255.117.127:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
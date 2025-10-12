function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.162.78.109:1080",
        "SOCKS 43.224.116.218:19201",
        "SOCKS 91.218.244.153:8989",
        "SOCKS 119.18.148.113:63636",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 77.221.134.220:3128",
        "SOCKS 18.143.167.190:9947",
        "SOCKS 222.180.188.204:8000",
        "SOCKS 103.70.79.3:8080",
        "SOCKS 181.78.75.84:999",
        "SOCKS 72.10.160.93:30557",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 123.200.14.170:2314",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 91.84.99.28:80",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 38.159.229.101:999",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 202.73.25.90:8080",
        "SOCKS 74.84.84.132:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
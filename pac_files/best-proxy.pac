function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.205.215.44:4216",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 77.238.103.98:8080",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 117.250.3.58:8080",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 58.186.92.146:16000",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 45.91.201.100:8082",
        "SOCKS 51.15.206.101:16379",
        "SOCKS 114.80.37.90:3081",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 98.185.94.76:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
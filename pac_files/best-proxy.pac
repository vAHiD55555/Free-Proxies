function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 65.108.251.40:57575",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 27.79.184.207:16000",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 27.71.228.32:3128",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 27.79.248.78:16000",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 51.79.99.237:4502",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 223.25.110.37:8199",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
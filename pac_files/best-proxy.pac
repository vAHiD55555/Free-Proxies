function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 120.25.189.254:3129",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 91.214.62.121:8053",
        "SOCKS 186.116.148.52:8080",
        "SOCKS 163.172.153.82:16379",
        "SOCKS 8.211.194.78:1080",
        "SOCKS 171.228.154.82:4001",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 221.202.27.194:10809",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 178.33.164.238:64958",
        "SOCKS 47.116.181.146:9080",
        "SOCKS 102.36.127.53:1080",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 40.71.46.210:8214",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 103.174.178.138:1144",
        "SOCKS 222.129.35.9:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
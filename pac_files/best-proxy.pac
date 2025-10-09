function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 147.185.221.19:14365",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 171.228.166.129:1001",
        "SOCKS 120.92.211.211:7890",
        "SOCKS 165.16.29.253:2020",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 72.10.160.93:30557",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 181.129.147.163:8080",
        "SOCKS 103.133.27.179:8080",
        "SOCKS 20.252.53.196:3128",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 14.225.240.23:8562",
        "SOCKS 103.144.209.104:8715",
        "SOCKS 18.143.165.238:9090",
        "SOCKS 27.74.215.131:30245",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 20.210.39.153:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
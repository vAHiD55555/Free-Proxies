function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.58.77.19:3127",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 173.249.48.227:3128",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 61.169.50.98:7890",
        "SOCKS 72.10.160.93:30557",
        "SOCKS 103.108.60.141:1080",
        "SOCKS 67.43.228.252:1173",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 103.82.135.154:8888",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 52.47.164.226:9304",
        "SOCKS 180.149.232.153:61245",
        "SOCKS 185.203.238.120:3128",
        "SOCKS 65.108.203.37:28080",
        "SOCKS 103.216.253.50:20000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
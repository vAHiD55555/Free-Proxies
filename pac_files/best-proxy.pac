function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 221.202.27.194:10807",
        "SOCKS 45.238.56.129:8080",
        "SOCKS 103.160.205.86:8080",
        "SOCKS 140.238.184.182:3128",
        "SOCKS 72.10.160.93:30557",
        "SOCKS 217.160.224.54:8118",
        "SOCKS 43.209.130.76:8713",
        "SOCKS 60.8.68.30:10809",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 8.213.128.6:8080",
        "SOCKS 36.93.8.34:11000",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 223.25.109.146:8199",
        "SOCKS 14.103.146.174:7890",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 143.198.147.156:8888",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 52.148.130.219:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
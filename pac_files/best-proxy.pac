function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.120.135.230:2030",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 62.60.131.185:4145",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 72.10.160.91:9607",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 122.52.32.86:8082",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 119.81.189.194:80",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 45.70.85.33:58080",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 169.57.157.148:80",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 47.76.189.189:8899",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 194.233.78.142:42495",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
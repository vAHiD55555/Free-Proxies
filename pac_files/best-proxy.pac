function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 206.42.55.99:3128",
        "SOCKS 114.130.153.122:58080",
        "SOCKS 67.43.236.19:25371",
        "SOCKS 160.25.48.33:9090",
        "SOCKS 43.209.130.76:8713",
        "SOCKS 43.163.85.187:1080",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 8.217.78.32:1011",
        "SOCKS 47.79.43.52:1122",
        "SOCKS 209.146.18.132:5050",
        "SOCKS 34.141.27.50:3128",
        "SOCKS 103.184.50.102:9090",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 157.245.154.238:8080",
        "SOCKS 14.248.84.131:8080",
        "SOCKS 177.234.217.88:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
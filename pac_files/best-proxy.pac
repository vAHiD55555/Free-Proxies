function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 162.243.149.86:31028",
        "SOCKS 36.255.98.181:5037",
        "SOCKS 62.60.131.179:5183",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 36.255.98.182:4301",
        "SOCKS 180.103.250.177:1080",
        "SOCKS 36.255.98.168:4304",
        "SOCKS 36.255.98.162:5280",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 36.255.98.169:4242",
        "SOCKS 138.68.60.8:80",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 62.60.131.184:4750",
        "SOCKS 62.60.131.197:4766",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 36.255.98.167:6111",
        "SOCKS 36.255.98.160:4009",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
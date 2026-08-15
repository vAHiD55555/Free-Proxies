function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.221.126.184:80",
        "SOCKS 158.46.23.102:10080",
        "SOCKS 193.233.218.213:1080",
        "SOCKS 152.228.134.176:8888",
        "SOCKS 78.153.155.49:8080",
        "SOCKS 150.129.115.253:6667",
        "SOCKS 43.153.84.220:9050",
        "SOCKS 192.252.208.70:14282",
        "SOCKS 147.45.60.110:1082",
        "SOCKS 159.223.52.199:3128",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 111.119.162.248:10937",
        "SOCKS 83.222.24.37:1080",
        "SOCKS 43.134.7.146:4000",
        "SOCKS 151.243.224.12:1080",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 43.130.38.45:51029",
        "SOCKS 8.220.136.174:5060",
        "SOCKS 141.147.109.224:1080",
        "SOCKS 194.163.174.78:1089",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
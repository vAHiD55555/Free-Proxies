function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.124.167:16379",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 94.184.25.15:242",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 65.108.203.37:28080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 94.184.25.34:240",
        "SOCKS 146.235.19.84:10850",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 202.62.59.216:1080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 213.35.110.67:10810",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 221.134.152.75:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
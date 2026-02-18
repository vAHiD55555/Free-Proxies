function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.78.213.56:80",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 120.77.203.0:443",
        "SOCKS 94.159.112.138:3129",
        "SOCKS 94.176.3.53:7443",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 103.178.87.50:8080",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 5.9.218.168:3128",
        "SOCKS 116.102.242.52:10017",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 152.228.212.223:29272",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
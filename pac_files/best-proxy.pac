function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.65.69.186:9200",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 103.138.123.242:8082",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 103.245.205.142:35158",
        "SOCKS 208.113.155.120:41154",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
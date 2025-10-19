function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.93.89.144:4098",
        "SOCKS 185.93.89.163:8099",
        "SOCKS 185.93.89.165:10336",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 185.93.89.155:9386",
        "SOCKS 185.93.89.145:9100",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 185.93.89.155:8002",
        "SOCKS 47.236.204.180:1111",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 185.93.89.155:24696",
        "SOCKS 185.93.89.147:4228",
        "SOCKS 103.133.110.243:20000",
        "SOCKS 37.200.67.75:1080",
        "SOCKS 103.133.110.243:20002",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
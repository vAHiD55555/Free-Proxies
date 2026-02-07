function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.124.167:16379",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 185.233.202.217:5858",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 170.233.30.33:4153",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 78.153.155.31:1081",
        "SOCKS 120.77.203.0:443",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 117.5.224.75:10034",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 221.134.152.75:7302",
        "SOCKS 62.60.131.189:4092",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 202.40.178.234:64564",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 103.73.193.134:8080",
        "SOCKS 72.207.113.97:4145",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 80.85.245.37:5555",
        "SOCKS 117.74.65.207:443",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 36.255.98.160:38584",
        "SOCKS 120.79.99.232:121",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 62.60.131.189:8082",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
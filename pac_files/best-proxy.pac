function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.66.46.150:69",
        "SOCKS 192.9.231.220:30001",
        "SOCKS 88.80.186.173:19100",
        "SOCKS 109.199.105.194:1080",
        "SOCKS 185.151.86.86:3699",
        "SOCKS 161.35.90.93:1083",
        "SOCKS 78.85.139.146:1080",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 144.31.181.52:8080",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 104.234.138.98:9097",
        "SOCKS 137.131.12.103:1080",
        "SOCKS 45.144.54.40:1080",
        "SOCKS 202.62.52.20:1080",
        "SOCKS 178.18.207.85:8888",
        "SOCKS 103.216.106.169:1080",
        "SOCKS 95.211.174.135:3128",
        "SOCKS 68.1.210.189:4145",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 5.189.160.163:9100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
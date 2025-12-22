function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.102.204.44:8135",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 120.77.203.0:443",
        "SOCKS 128.140.76.145:30157",
        "SOCKS 43.102.204.43:8092",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 203.189.137.127:1080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 202.40.178.230:64564",
        "SOCKS 67.201.58.190:4145",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 128.140.76.145:17923",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}